// import "./public/ordial/src/javascript/browser/shims"
// import * as WorldView from "./public/ordial/src/javascript/browser/views/WorldView"
// import * as SeedView from "./public/ordial/src/javascript/browser/views/SeedView"
// import * as TimeoutControlsView from "./public/ordial/src/javascript/browser/views/TimeoutControlsView"
// import * as CritterGutsView from "./public/ordial/src/javascript/browser/CritterGutsView"
// import * as SaveControlsView from "./public/ordial/src/javascript/browser/views/SaveControlsView"
// import * as Seed from "./public/ordial/src/javascript/lib/models/Seed"
//
class PxtOrdial {}
//   private paused: boolean;
//   private worldView: any;
//   private seedView: any;
//   private timeoutControlsView: any;
//   private saveControlsView: any;
//   private critterManaView: any;
//
//   initialize() {
//     this.paused = false;
//
//     // @ts-ignore
//     PIXI.loader.add('/sim/ordial/public/compiled/assets/spriteSheet/ordialSprites.json')
//       .load(() => {
//
//         // @ts-ignore
//         this.worldView = new WorldView({model: singletonContext.world, el: '#world'});
//         this.worldView.render();
//
//       });
//
//
//     this.seedView = new SeedView({model: new Seed(), el: '#seedContainer'});
//
//     // this.pauseView = new PauseView({ paused: this.paused, el: '#pauseContainer' });
//
//     this.timeoutControlsView = new TimeoutControlsView({el: '#timeoutControlsContainer'});
//     this.saveControlsView = new SaveControlsView({
//       el: '#saveControlsContainer'
//     });
//
//     this.critterManaView = new CritterGutsView({el: '#critterGutsContainer'});
//
//     var ordial = this;
//     // this.listenTo(this.pauseView, 'pauseButtonClicked', function () {
//     //   ordial.togglePause();
//     // });
//
//     this.listenTo(this.timeoutControlsView, 'timeout:changed', function (event: any) {
//       // @ts-ignore
//       singletonContext.scheduler.timeout = event.timeout;
//     });
//     this.seedView.render();
//     // this.pauseView.render();
//     this.timeoutControlsView.render();
//     this.saveControlsView.render();
//     this.critterManaView.render();
//   }
//
//   togglePause() {
//     this.paused = !this.paused;
//
//     this.updateWorld();
//     // this.updatePauseButton();
//     this.updateSeedView();
//   }
//
//   updateWorld() {
//     if (this.worldView) {
//       this.worldView.render();
//     }
//
//     if (!this.paused) {
//       // @ts-ignore
//       singletonContext.world.update();
//       this.critterManaView.render();
//       // @ts-ignore
//       singletonContext.scheduler.schedule(this);
//     }
//   }
//
//   // updatePauseButton() {
//   //   this.pauseView.paused = this.paused;
//   //   this.pauseView.render();
//   // },
//
//   updateSeedView() {
//     this.seedView.disableInput();
//     this.seedView.render();
//   }
//
//   private listenTo(timeoutControlsView: any, eventName: string, callback: (event: any) => void) {
//
//   }
// };
//
//
// $(function () {
//   // @ts-ignore
//   global.SingletonContext = SingletonContext;
//   // @ts-ignore
//   global.Resource = Resource;
//   // @ts-ignore
//   global.Rock = Rock;
//   // @ts-ignore
//   global.Critter = Critter;
//   // @ts-ignore
//   global.Ordial = PxtOrdial;
// });
//
// module.exports = PxtOrdial;
