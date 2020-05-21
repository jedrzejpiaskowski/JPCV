export class TabInfo {

    public active = false;
    public closable = true;

    constructor(public name: string, public url: string, public icon: string) {
        this.active = true;
    }
}
