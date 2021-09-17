const makeDraggable = (options) => {
  let left, top, actualLeft, actualTop;
  if (
    !options.hasOwnProperty("sourceID") ||
    !options.hasOwnProperty("targetID")
  ) {
    console.error("source or target id not provided");
    return false;
  } else {
    const source = document.getElementById(options.sourceID),
      target = document.getElementById(options.targetID);
    if (!source || !target) {
      console.error("provide id attribute only. Do not include #");
      return false;
    } else {
      source.setAttribute("draggable", false);

      source.onmousedown = function (event) {
        source.style.position = "absolute";
        source.style.zIndex = 1000;

        target.append(source);

        function moveAt(pageX, pageY) {
          left = pageX - source.offsetWidth / 2;
          source.style.left = left + "px";
          top = pageY - source.offsetHeight / 2;
          source.style.top = top + "px";
          actualLeft =
            ((source.offsetLeft - target.offsetLeft) / target.offsetWidth) *
            100;
          actualTop =
            ((source.offsetTop - target.offsetTop) / target.offsetHeight) * 100;
        }

        // move our absolutely positioned source under the pointer
        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        target.addEventListener("mousemove", onMouseMove);

        source.onmouseup = function () {
          target.removeEventListener("mousemove", onMouseMove);
          source.onmouseup = null;
          const event = new CustomEvent("onDropped", {
            detail: {
              left: left + "px",
              top: top + "px",
              leftMargin: actualLeft,
              topMargin: actualTop,
            },
          });
          window.dispatchEvent(event);
        };
      };
    }
  }
};


module.exports.makeDraggable = makeDraggable