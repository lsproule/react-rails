//import { TurboMount } from "turbo-mount";
//import { registerComponent } from "turbo-mount/react";
//import { Hello } from "./components/hello";
//const turboMount = new TurboMount();
//
//// to register a component use:
//registerComponent(turboMount, "Hello", Hello); // where Hello is the imported the component

// to override the default controller use:
// registerComponent(turboMount, "Hello", Hello, HelloController); // where HelloController is a Stimulus controller extended from TurboMountController

// If you want to automatically register components use:
// import { registerComponents } from "turbo-mount/registerComponents/react";
// const controllers = import.meta.glob("/controllers/**/*_controller.js", { eager: true });
// const components = import.meta.glob("/components/**/*.jsx", { eager: true });
// registerComponents({ turboMount, components, controllers });
//
//
//import plugin, { TurboMount } from "turbo-mount/react";
//import { registerComponents } from "turbo-mount/registerComponents/vite";
//
//
//const controllers = import.meta.glob("./**/*_controller.js", { eager: true });
//const js_components = import.meta.glob("/components/**/*.jsx", { eager: true });
//const ts_components = import.meta.glob("/components/**/*.tsx", { eager: true });
//const components = [...js_components, ...ts_components];
//
//registerComponents({ plugin, turboMount, components, controllers });

// app/javascript/turbo-mount.js

import { TurboMount } from "turbo-mount";
import { registerComponent } from "turbo-mount/react";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar"
const turboMount = new TurboMount(); // or new TurboMount({ application })

registerComponent(turboMount, "Button", Button);
registerComponent(turboMount, "Navbar", Navbar);
