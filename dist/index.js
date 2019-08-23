'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var applyStyles = function applyStyles(object, styles) {
  var array = Object.entries(styles);
  array.map(function(style) {
    var property = style[0];
    var value = style[1];
    object.style[property] = value;
  });
};

var imageboy = function imageboy() {
  var images = document.querySelectorAll('img[data-replace]');
  images.forEach(function(image) {
    var ratio = image.dataset.ratio ? eval(image.dataset.ratio) : 16 / 9;
    console.log(ratio < 1);
    console.log(ratio > 1);
    var container = document.createElement('div');
    var holder = document.createElement('div');
    var imageClone = image.cloneNode(true);
    container.classList = image.classList;
    imageClone.classList = '';
    image.parentNode.insertBefore(container, image);
    image.parentNode.removeChild(image);
    container.appendChild(holder);
    holder.appendChild(imageClone);
    applyStyles(container, {
      maxWidth: '100%',
    });
    applyStyles(holder, {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      paddingBottom: 'calc(100% / '.concat(ratio, ')'),
      maxWidth: '100%',
      zIndex: '0',
      backgroundImage: "url('".concat(image.src, "')"),
      backgroundSize: ''.concat(ratio > 1 ? '100% auto' : 'auto 100%'),
      backgroundPosition: '50% 50%',
    });
    applyStyles(
      imageClone,
      _defineProperty(
        {
          position: 'absolute',
          display: 'none',
          top: '0',
          left: '0',
          bottom: '0',
        },
        'left',
        '0',
      ),
    );
  });
};

exports.imageboy = imageboy;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBseVN0eWxlcyA9IChvYmplY3QsIHN0eWxlcykgPT4ge1xuICBjb25zdCBhcnJheSA9IE9iamVjdC5lbnRyaWVzKHN0eWxlcyk7XG4gIGFycmF5Lm1hcChzdHlsZSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBzdHlsZVswXTtcbiAgICBjb25zdCB2YWx1ZSA9IHN0eWxlWzFdO1xuICAgIG9iamVjdC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbWFnZWJveSA9ICgpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtcmVwbGFjZV0nKTtcbiAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGNvbnN0IHJhdGlvID0gaW1hZ2UuZGF0YXNldC5yYXRpbyA/IGV2YWwoaW1hZ2UuZGF0YXNldC5yYXRpbykgOiAxNiAvIDk7XG4gICAgY29uc29sZS5sb2cocmF0aW8gPCAxKTtcbiAgICBjb25zb2xlLmxvZyhyYXRpbyA+IDEpO1xuXG4gICAgY29uc3QgYmdTaXplID0gcmF0aW8gPiAxID8gJzEwMCUgYXV0bycgOiAnYXV0byAxMDAlJztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlQ2xvbmUgPSBpbWFnZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9IGltYWdlLmNsYXNzTGlzdDtcblxuICAgIGltYWdlQ2xvbmUuY2xhc3NMaXN0ID0gJyc7XG4gICAgaW1hZ2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBpbWFnZSk7XG4gICAgaW1hZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWFnZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbGRlcik7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGltYWdlQ2xvbmUpO1xuXG4gICAgYXBwbHlTdHlsZXMoY29udGFpbmVyLCB7IG1heFdpZHRoOiAnMTAwJScgfSk7XG4gICAgYXBwbHlTdHlsZXMoaG9sZGVyLCB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcGFkZGluZ0JvdHRvbTogYGNhbGMoMTAwJSAvICR7cmF0aW99KWAsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiAnMCcsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7aW1hZ2Uuc3JjfScpYCxcbiAgICAgIGJhY2tncm91bmRTaXplOiBgJHtyYXRpbyA+IDEgPyAnMTAwJSBhdXRvJyA6ICdhdXRvIDEwMCUnfWAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUgNTAlJyxcbiAgICB9KTtcbiAgICBhcHBseVN0eWxlcyhpbWFnZUNsb25lLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgYm90dG9tOiAnMCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgaW1hZ2Vib3kgfTtcbiJdLCJuYW1lcyI6WyJhcHBseVN0eWxlcyIsIm9iamVjdCIsInN0eWxlcyIsImFycmF5IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInN0eWxlIiwicHJvcGVydHkiLCJ2YWx1ZSIsImltYWdlYm95IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImltYWdlIiwicmF0aW8iLCJkYXRhc2V0IiwiZXZhbCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiaG9sZGVyIiwiaW1hZ2VDbG9uZSIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsIm92ZXJmbG93Iiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nQm90dG9tIiwiekluZGV4IiwiYmFja2dyb3VuZEltYWdlIiwic3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwidG9wIiwibGVmdCIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtNQUNoQ0MsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUgsTUFBZixDQUFkO0VBQ0FDLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLEtBQUssRUFBSTtRQUNYQyxRQUFRLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQXRCO1FBQ01FLEtBQUssR0FBR0YsS0FBSyxDQUFDLENBQUQsQ0FBbkI7SUFDQU4sTUFBTSxDQUFDTSxLQUFQLENBQWFDLFFBQWIsSUFBeUJDLEtBQXpCO0dBSEY7Q0FGRjs7QUFTQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO01BQ2ZDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBZjtFQUNBRixNQUFNLENBQUNHLE9BQVAsQ0FBZSxVQUFBQyxLQUFLLEVBQUk7UUFDaEJDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWNELEtBQWQsR0FBc0JFLElBQUksQ0FBQ0gsS0FBSyxDQUFDRSxPQUFOLENBQWNELEtBQWYsQ0FBMUIsR0FBa0QsS0FBSyxDQUFyRTtJQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBSyxHQUFHLENBQXBCO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLEdBQUcsQ0FBcEI7QUFFQSxBQUVBLFFBQU1LLFNBQVMsR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWxCO1FBQ01DLE1BQU0sR0FBR1gsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWY7UUFDTUUsVUFBVSxHQUFHVCxLQUFLLENBQUNVLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbkI7SUFDQUosU0FBUyxDQUFDSyxTQUFWLEdBQXNCWCxLQUFLLENBQUNXLFNBQTVCO0lBRUFGLFVBQVUsQ0FBQ0UsU0FBWCxHQUF1QixFQUF2QjtJQUNBWCxLQUFLLENBQUNZLFVBQU4sQ0FBaUJDLFlBQWpCLENBQThCUCxTQUE5QixFQUF5Q04sS0FBekM7SUFDQUEsS0FBSyxDQUFDWSxVQUFOLENBQWlCRSxXQUFqQixDQUE2QmQsS0FBN0I7SUFDQU0sU0FBUyxDQUFDUyxXQUFWLENBQXNCUCxNQUF0QjtJQUNBQSxNQUFNLENBQUNPLFdBQVAsQ0FBbUJOLFVBQW5CO0lBRUF4QixXQUFXLENBQUNxQixTQUFELEVBQVk7TUFBRVUsUUFBUSxFQUFFO0tBQXhCLENBQVg7SUFDQS9CLFdBQVcsQ0FBQ3VCLE1BQUQsRUFBUztNQUNsQlMsUUFBUSxFQUFFLFVBRFE7TUFFbEJDLFFBQVEsRUFBRSxRQUZRO01BR2xCQyxLQUFLLEVBQUUsTUFIVztNQUlsQkMsTUFBTSxFQUFFLFFBSlU7TUFLbEJDLGFBQWEsd0JBQWlCcEIsS0FBakIsTUFMSztNQU1sQmUsUUFBUSxFQUFFLE1BTlE7TUFPbEJNLE1BQU0sRUFBRSxHQVBVO01BUWxCQyxlQUFlLGlCQUFVdkIsS0FBSyxDQUFDd0IsR0FBaEIsT0FSRztNQVNsQkMsY0FBYyxZQUFLeEIsS0FBSyxHQUFHLENBQVIsR0FBWSxXQUFaLEdBQTBCLFdBQS9CLENBVEk7TUFVbEJ5QixrQkFBa0IsRUFBRTtLQVZYLENBQVg7SUFZQXpDLFdBQVcsQ0FBQ3dCLFVBQUQ7TUFDVFEsUUFBUSxFQUFFLFVBREQ7TUFFVFUsT0FBTyxFQUFFLE1BRkE7TUFHVEMsR0FBRyxFQUFFLEdBSEk7TUFJVEMsSUFBSSxFQUFFLEdBSkc7TUFLVEMsTUFBTSxFQUFFO2VBQ0YsR0FORyxFQUFYO0dBL0JGO0NBRkY7Ozs7In0=
