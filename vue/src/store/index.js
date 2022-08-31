import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "tes",
    slug: "tes",
    status: "draft",
    image: "",
    description: "tes",
    created_at: "2022-08-31 18:00:00",
    updated_at: "2022-08-31 18:00:00",
    expire_date: "2022-09-31 18:00:00",
    questions: [
      {
        id: 100,
        type: "select",
        question: "tes",
        description: null,
        data: {
          options: [
            {
              uuid: "aaa",
              text: "USA",
            },
            {
              uuid: "aab",
              text: "Germany",
            },
            {
              uuid: "aac",
              text: "Georgia",
            },
            {
              uuid: "aad",
              text: "India",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "tes",
        description: "tes tes tes tes tes",
        data: {
          options: [
            {
              uuid: "aba",
              text: "Javascript",
            },
            {
              uuid: "acb",
              text: "PHP",
            },
            {
              uuid: "adc",
              text: "Python",
            },
            {
              uuid: "aed",
              text: "HTML + CSS",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "tes",
        description: "tes tes tes tes tes",
        data: {
          options: [
            {
              uuid: "aba",
              text: "Javascript",
            },
            {
              uuid: "acb",
              text: "PHP",
            },
            {
              uuid: "adc",
              text: "Python",
            },
            {
              uuid: "aed",
              text: "HTML + CSS",
            },
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "tes",
        description: "tes tes tes tes tes",
        data: {
          options: [
            {
              uuid: "aba",
              text: "Javascript",
            },
            {
              uuid: "acb",
              text: "PHP",
            },
            {
              uuid: "adc",
              text: "Python",
            },
            {
              uuid: "aed",
              text: "HTML + CSS",
            },
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "tes",
        description: "tes tes tes tes tes",
        data: {
          options: [
            {
              uuid: "aba",
              text: "Javascript",
            },
            {
              uuid: "acb",
              text: "PHP",
            },
            {
              uuid: "adc",
              text: "Python",
            },
            {
              uuid: "aed",
              text: "HTML + CSS",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "tes",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "tes",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "laravel",
    slug: "laravel",
    status: "active",
    image: "",
    description: "laravel",
    created_at: "2022-08-31 18:00:00",
    updated_at: "2022-08-31 18:00:00",
    expire_date: "2022-09-31 18:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "vue3",
    slug: "vue3",
    status: "active",
    image: "",
    description: "vue3",
    created_at: "2022-08-31 18:00:00",
    updated_at: "2022-08-31 18:00:00",
    expire_date: "2022-09-31 18:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "tailwind",
    slug: "tailwind",
    status: "active",
    image: "",
    description: "tailwind",
    created_at: "2022-08-31 18:00:00",
    updated_at: "2022-08-31 18:00:00",
    expire_date: "2022-09-31 18:00:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
