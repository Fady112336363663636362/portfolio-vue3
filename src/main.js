import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// إضافة أيقونة البحث للمكتبة
library.add(faSearch);

const app = createApp(App);

// تسجيل الكمبوننت font-awesome-icon عالمياً
app.component("font-awesome-icon", FontAwesomeIcon);

// تثبيت التطبيق على العنصر الموجود في الـ HTML
app.mount("#app");
