/**
 * @function checkDevice
 * @description Checks the user device.
 * @param { () => void } mobileCallback - Mobile callback.
 * @param { () => void } desktopCallback - Desktop callback.
 */

// Version 1
// const checkDevice = (mobileCallback: () => void, desktopCallback: () => void) => {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     mobileCallback();
//   } else {
//     desktopCallback();
//   }
// };

// Version 2
// const checkDevice = (mobileCallback: () => void, desktopCallback: () => void) => {
//   const ua = navigator.userAgent;
//   if (
//     ua.match(/Android/i) ||
//     ua.match(/webOS/i) ||
//     ua.match(/iPhone/i) ||
//     ua.match(/iPad/i) ||
//     ua.match(/iPod/i) ||
//     ua.match(/BlackBerry/) ||
//     ua.match(/Windows Phone/i) ||
//     ua.match(/ZuneWP7/i)
//   ) {
//     mobileCallback();
//   } else {
//     desktopCallback();
//   }
// };

// Version 3
// const checkDevice = (
//   androidCallback: () => void,
//   iphoneCallback: () => void,
//   otherDevicesCallback: () => void,
// ) => {
//   const ua = navigator.userAgent;
//   const checker = {
//     android: ua.match(/Android/),
//     iphone: ua.match(/(iPhone|iPod|iPad)/),
//   };

//   if (checker.android) {
//     androidCallback();
//   } else if (checker.iphone) {
//     iphoneCallback();
//   } else {
//     otherDevicesCallback();
//   }
// };

// export default checkDevice;
