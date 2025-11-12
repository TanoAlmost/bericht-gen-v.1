import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

export interface IBerichteGenWebPartProps {}

export default class BerichteGenWebPart extends BaseClientSideWebPart<IBerichteGenWebPartProps> {

  public render(): void {
    const base = this.context.manifest.loaderConfig.internalModuleBaseUrls[0];
    const url = `${base}assets/index.html`;
    this.domElement.innerHTML = `
      <iframe src="${url}" style="width:100%;height:100vh;border:0;" title="Berichte"></iframe>
    `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
