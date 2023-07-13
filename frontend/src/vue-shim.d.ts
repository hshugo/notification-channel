/*
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
*/
/*
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}
*/
declare module '*.vue' {
  const component: any
  export default component;
}