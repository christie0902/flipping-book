import React, { forwardRef, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css"

const Page = forwardRef(({ number, children }, ref) => {
  return (
    <div className="page-content" ref={ref}>
      <h1>Page Header</h1>
      <p>{children}</p>
      <p>Page number: {number}</p>
    </div>
  );
});

function MyBook() {
  const book = useRef();

  return (
    <>
      <div className="pages">
      <HTMLFlipBook
          width={300}
          height={500}
          showCover={true}
          className="book"
          maxShadowOpacity={false}
          mobileScrollSupport={true} // Enable mobile scroll support
          swipeDistance={50} // Set swipe distance
          useMouseEvents={true} // Enable mouse and touch events
          usePortrait={true} // Enable portrait mode
          useLandscape={true} // Enable landscape mode
          flippingTime={500} // Adjust flipping animation time if needed
          ref={(node) => {
            if (node !== null) {
              book.current = node;
            }
          }}
        >
          {/* Empty div for the cover */}
          <div className="front-cover" data-density="hard">
            <Page number="0"></Page>
          </div>
          <div className="my-page">
            <Page number="1">Page 1</Page>
          </div>
          <div className="my-page">
            <Page number="2">Page 2</Page>
          </div>
          <div className="back-cover" data-density="hard">
            <Page number="3">End</Page>
          </div>
        </HTMLFlipBook>
      </div>
      <button onClick={() => book.current.pageFlip().flipPrev()}>Back</button>
      <button onClick={() => book.current.pageFlip().flipNext()}>Next page</button>
    </>
  );
}

export default MyBook;