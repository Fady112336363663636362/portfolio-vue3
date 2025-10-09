<template>
    <span class="text-[#00ff51] typing-text"></span>
</template>

<style>
.typing-text::after {
  content: "Frontend Developer";
  display: inline-block;
  border-right: 2px solid #00ff51; /* ✅ حطيت قيمة العرض */
  padding-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle; /* ✅ يخليها في نفس مستوى النص */
  animation: typing-smooth 8s steps(20, end) infinite; /* ✅ خطوات أنيقة */
}

@keyframes typing-smooth {
  0% {
    width: 0;
    opacity: 0.2;
    content: "Frontend Developer";
  }
  20% {
    width: 18ch;
    opacity: 1;
    content: "Frontend Developer";
  }
  40% {
    width: 0;
    opacity: 0.2;
    content: "Frontend Developer";
  }
  50% {
    content: "Web Developer";
    width: 0;
    opacity: 0.2;
  }
  70% {
    width: 13ch;
    opacity: 1;
    content: "Web Developer";
  }
  100% {
    width: 0;
    opacity: 0.2;
    content: "Web Developer";
  }
}
</style>