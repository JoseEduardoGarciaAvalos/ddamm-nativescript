// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { registerElement } from "nativescript-angular/element-registry";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh);

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
