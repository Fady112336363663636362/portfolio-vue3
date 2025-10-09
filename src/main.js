import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";




library.add(faSearch);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);


// ✅ تهيئة AOS بحيث الأنيميشن يشتغل في كل مرة تنزل أو تطلع
AOS.init({
  duration: 1000, // مدة الأنيميشن
  once: false, // يعني يشتغل كل مرة العنصر يدخل في الشاشة
});

// ✅ تشغيل التطبيق
app.mount("#app");
