(function() {


    function checkForButtonElements() {
        var nextBtn = document.getElementsByClassName("nextBtn")
        var pageName = document.getElementsByClassName("pageName")
        if (nextBtn.length != 0 && pageName.length != 0) {
           triggerClick(nextBtn, pageName)
        } else {
           setTimeout(checkForButtonElements, 2000);
        }
    }

      function triggerClick(nextBtn, pageName) {
           window.setInterval(function(e){
                if (pageName[0].innerText === 'Page 5') {
                    pageName[0].click();
                    document.getElementsByClassName("page-item")[0].click();
                     pageItem[0].click();
                     pageName[0].click();
                } else {
                    nextBtn[0].click();
                }
            }, 10000);
         }

    checkForButtonElements();

})();

(function() {


//     function getEvent(button) {
//         var button = document.getElementsByClassName("nextBtn")
//         window.setInterval(function(e){
//             button[0].click();
//         }, 5000);
//     }

      var TRANSITION = 'transform ease-in-out 250ms';
      var report;
      var reportCanvas;
      var reportParent;

      function checkForReportElement() {
        console.log('hello')
        var report = document.querySelector('lego-report');
        if (report) {
            console.log('in if')
          reportParent = report.parentNode;
          reportCanvas = document.querySelector('lego-canvas-container');
          report.style.transition = TRANSITION;
          reportCanvas.style.transition = TRANSITION;
          setReportScale(reportParent, reportCanvas, report);
        } else {
          setTimeout(checkForReportElement, 2000);
        }

     }


      function setReportScale(reportParent, reportCanvas, report) {
            var height = window.innerHeight;
            var width = window.innerWidth;
             reportParent.style.height = '100%';
             reportParent.style.width = '100%';
             reportParent.style.position = 'fixed';
             reportParent.style.top = '65px';
             reportParent.style.left = '0';
//              report.style.height = (height + 200) + 'px';
//              report.style.width = (width + 200) + 'px';
//              reportCanvas.style.height = (height + 200) + 'px';
//              reportCanvas.style.width = (width + 200) + 'px';
      }

//       function setReportScale(reportParent, reportCanvas, report) {
//          var height: window.height,
//          var width: window.width,
//          var left: window.left,
//          var top: window.top
//           var w = window.innerWidth / reportParent.clientWidth;
//           var h = window.innerHeight / reportParent.clientHeight;
//           if (w < h) {
//             var y = (window.innerHeight - reportParent.clientHeight) / 2;
//             report.style.transform = 'scale('+ w.toFixed(2) +')'
//             reportCanvas.style.transform = 'translateY('+ y +'px)'
//           } else {
//               var x = (window.innerWidth - reportParent.clientWidth) / 2;
//               report.style.transform = 'scale('+ h.toFixed(2) +')';
//               reportCanvas.style.transform = 'translateX('+ x +'px)';
//             }
//             report.style.transformOrigin = 'top left'
//           }


      function forceFullWidth(canvas) {
          setTimeout(function(){
          var canvas = document.getElementsByClassName("lego-canvas-container")
          var windowHeight = document.body.clientHeight;
          var windowWidth = document.body.clientWidth;
          console.log(windowHeight, windowWidth, canvas[0]);
          canvas[0].style.width = windowWidth + 'px';
          canvas[0].style.height = windowHeight + 'px';
           console.log(windowHeight, windowWidth, canvas[0]);
          }, 20000);
    }

//     getEvent();
    checkForReportElement();

})();
