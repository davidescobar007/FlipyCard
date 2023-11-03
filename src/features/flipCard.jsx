/* eslint-disable react/prop-types */
import * as React from "react"
import { useEffect, useMemo, useState } from "react"

function CardFlipper({
   cardStyles: { back, front },
   cardZIndex,
   containerStyle,
   containerClassName,
   flipDirection,
   flipSpeedFrontToBack,
   flipSpeedBackToFront,
   infinite,
   isFlipped,
   children
}) {
   const [isItemFlipped, setIsItemFlipped] = useState(isFlipped)
   const [rotation, setRotation] = useState(0)

   useEffect(() => {
      if (isFlipped !== isItemFlipped) {
         setIsItemFlipped(isFlipped)
         setRotation((c) => c + 180)
      }
   }, [isFlipped])

   const getContainerClassName = useMemo(() => {
      let className = "react-card-flip"
      if (containerClassName) {
         className += ` ${containerClassName}`
      }
      return className
   }, [containerClassName])

   const getComponent = (key) => {
      // eslint-disable-next-line react/prop-types
      if (children.length !== 2) {
         throw new Error("Component ReactCardFlip requires 2 children to function")
      }
      return children[key]
   }

   const frontRotateY = `rotateY(${infinite ? rotation : isFlipped ? 180 : 0}deg)`
   const backRotateY = `rotateY(${infinite ? rotation + 180 : isFlipped ? 0 : -180}deg)`
   const frontRotateX = `rotateX(${infinite ? rotation : isFlipped ? 180 : 0}deg)`
   const backRotateX = `rotateX(${infinite ? rotation + 180 : isFlipped ? 0 : -180}deg)`

   const styles = {
      back: {
         WebkitBackfaceVisibility: "hidden",
         backfaceVisibility: "hidden",
         height: "100%",
         left: "0",
         position: isFlipped ? "relative" : "absolute",
         top: "0",
         transform: flipDirection === "horizontal" ? backRotateY : backRotateX,
         transformStyle: "preserve-3d",
         transition: `${flipSpeedFrontToBack}s`,
         width: "100%",
         ...back
      },
      container: {
         perspective: "1000px",
         zIndex: `${cardZIndex}`
      },
      flipper: {
         height: "100%",
         position: "relative",
         width: "100%"
      },
      front: {
         WebkitBackfaceVisibility: "hidden",
         backfaceVisibility: "hidden",
         height: "100%",
         left: "0",
         position: isFlipped ? "absolute" : "relative",
         top: "0",
         transform: flipDirection === "horizontal" ? frontRotateY : frontRotateX,
         transformStyle: "preserve-3d",
         transition: `${flipSpeedBackToFront}s`,
         width: "100%",
         zIndex: "2",
         ...front
      }
   }

   return (
      <div className={getContainerClassName} style={{ ...styles.container, ...containerStyle }}>
         <div className="react-card-flipper" style={styles.flipper}>
            <div className="react-card-front" style={styles.front}>
               {getComponent(0)}
            </div>

            <div className="react-card-back" style={styles.back}>
               {getComponent(1)}
            </div>
         </div>
      </div>
   )
}

CardFlipper.defaultProps = {
   cardStyles: {
      back: {},
      front: {}
   },
   cardZIndex: "auto",
   containerStyle: {},
   flipDirection: "horizontal",
   flipSpeedBackToFront: 0.9,
   flipSpeedFrontToBack: 0.9,
   infinite: false,
   isFlipped: false
}

export default CardFlipper
