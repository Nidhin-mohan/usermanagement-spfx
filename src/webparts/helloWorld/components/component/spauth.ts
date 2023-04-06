    import { ISPFXContext, SPFI, spfi, SPFx } from "@pnp/sp";

    import "@pnp/sp/presets/all";



    let sp: SPFI = spfi();



    class SPService {

    private _sp: SPFI = spfi();



    get sp(): SPFI {

    if(!this._sp) {

    throw new Error("SP is not initialized");

    }

    return this._sp;

    }



    public setup = (context: ISPFXContext): void => {

    this._sp = this._sp.using(SPFx(context));



    sp = this._sp;

    }

    }



    const spService = new SPService();



    export {sp, spService}