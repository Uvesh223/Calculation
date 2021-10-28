import { CommonActions } from "@react-navigation/native";
const navigateAndReset =(routeName)=>{
    CommonActions.reset({
      index: 0,
      routes: [{name:routeName }],
    })
}
const intro = CommonActions.reset({
  index: 0,
  routes: [{ name: "intro" }],
})
const Home = CommonActions.reset({
  index: 0,
  routes: [{ name: "Home" }],
})
export  {
  navigateAndReset,Home,intro
};