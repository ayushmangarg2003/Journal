import React from 'react'
import { ShimmerContentBlock } from "react-shimmer-effects-18";
const Shimmer = () => {
    return (
        <>
            <ShimmerContentBlock
                title
                text
                cta
                reverse
                thumbnailWidth={150}
                thumbnailHeight={150}
            />
            <ShimmerContentBlock
                title
                text
                cta
                thumbnailWidth={150}
                thumbnailHeight={150}
            />
        </>
    )
};
export default Shimmer

