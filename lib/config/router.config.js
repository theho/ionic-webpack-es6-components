export default function($stateProvider) {
    'ngInject';
    return $stateProvider.state('root', {
        abstract: true,
        views: {
            '@': {
                template: `<ion-side-menus enable-menu-with-back-views="false">
                    <ion-side-menu-content>
                        <ion-nav-bar class="bar-positive">
                            <ion-nav-back-button></ion-nav-back-button>
                            <ion-nav-buttons side="left">
                                <button class="button button-icon button-clear ion-navicon" menu-toggle="left">
                                </button>
                            </ion-nav-buttons>
                        </ion-nav-bar>
                        <ion-nav-view name="content"></ion-nav-view>
                    </ion-side-menu-content>
                    <ion-side-menu side="left" ui-view="menu"></ion-side-menu>
                </ion-side-menus>`
            }
        }
    });
}
