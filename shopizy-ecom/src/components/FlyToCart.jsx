import { motion, useAnimation } from "framer-motion";
import { useState, useRef, forwardRef, useImperativeHandle } from "react"; // ✅ Added useImperativeHandle

const FlyToCart = forwardRef(({ triggerRef, targetRef, imageSrc }, ref) => {
  const controls = useAnimation();
  const [showFloating, setShowFloating] = useState(false);
  const [floatingPosition, setFloatingPosition] = useState({});
  const floatingRef = useRef(null);

  const startAnimation = async () => {
    if (!triggerRef?.current || !targetRef?.current) {
      console.error("FlyToCart: Missing triggerRef or targetRef.");
      return;
    }

    const bagIcon = triggerRef.current.getBoundingClientRect();
    const cartIcon = targetRef.current.getBoundingClientRect();
    const isCartFixed = targetRef.current.offsetParent === document.body;

    const newPosition = {
      start: {
        x: bagIcon.left + bagIcon.width / 2,
        y: bagIcon.top + bagIcon.height / 2 + window.scrollY,
      },
      end: {
        x: cartIcon.left + cartIcon.width / 2 + (isCartFixed ? 0 : window.scrollX),
        y: cartIcon.top + cartIcon.height / 2 + (isCartFixed ? 0 : window.scrollY),
      },
    };

    setFloatingPosition(newPosition);
    setShowFloating(true);

    console.log("FlyToCart Start:", newPosition);

    await controls.start({
      x: newPosition.end.x - newPosition.start.x,
      y: newPosition.end.y - newPosition.start.y,
      scale: 0.3,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });

    setTimeout(() => {
      console.log("FlyToCart: Animation Complete, Hiding.");
      setShowFloating(false);
    }, 1500);
  };

  // ✅ Expose `startAnimation` to parent components
  useImperativeHandle(ref, () => ({
    startAnimation,
  }));

  return (
    <>
      {showFloating && floatingPosition?.start && floatingPosition?.end && (
        <motion.img
          ref={floatingRef}
          src={imageSrc}
          alt=""
          initial={{
            opacity: 1,
            scale: 1,
            left: `${floatingPosition.start.x}px`,
            top: `${floatingPosition.start.y}px`,
          }}
          animate={{
            x: showFloating ? floatingPosition?.end?.x - floatingPosition?.start?.x : 0,
            y: showFloating ? floatingPosition?.end?.y - floatingPosition?.start?.y : 0,
            scale: showFloating ? 0.3 : 1,
            opacity: showFloating ? 1 : 0, 
            transition: { duration: 1.2, ease: "easeOut" },
          }}
          style={{
            position: "fixed",
            width: "50px",
            height: "50px",
            zIndex: 999,
            opacity: showFloating ? 1 : 0,
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
});

export default FlyToCart;
