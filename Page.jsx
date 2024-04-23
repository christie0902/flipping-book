import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

function DemoBook() {
    const book = useRef();

    return (
        <>
            <button onClick={() => book.current.pageFlip().flipNext()}>Next page</button>
            <HTMLFlipBook
                ref={book}
                width={300}
                height={500}
            >
                {/* ... pages */}
            </HTMLFlipBook>
        </>
    );
}

export default DemoBook;