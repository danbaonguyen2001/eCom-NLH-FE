import React, { useEffect, useRef } from "react";

const EventTimer = ({ data }) => {
  // timer handler
  const timerE = useRef(null);
  useEffect(() => {
    let endUp = false;
    // just event at index=0 is known as timer UI need
    const expired =
      new Date(data?.expireIn) || new Date("2022-08-24 23:25:00");
    // const expired = new Date("2022-08-25 11:47:00");
    const secondMinus = setInterval(() => {
      const now = new Date().getTime();
      const leftTime = expired.getTime() - now;
      const days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
      let string = `<div className ="lcTimer__content">Còn:
          <span className="lcTimer__num">
          ${days} ngày&nbsp;
          </span> 
           <span className="lcTimer__num">
           ${hours} giờ&nbsp;
           </span>
            <span className="lcTimer__num">
           ${minutes} phút&nbsp;
           </span>
             <span className="lcTimer__num">
            ${seconds} giây&nbsp;
            </span> 
          </div>
            `;
      timerE.current.innerHTML = string;
      if (leftTime < 0) {
        clearInterval(secondMinus);
        string = `Kết thúc sự kiện`;
        timerE.current.innerHTML = string;
        endUp = true;
      }
    }, 1000);
    if (endUp) return;

    return () => {
      clearInterval(secondMinus);
    };
  }, [data]);
  return (
    <div className="lcTimerOuter">
      <div ref={timerE} className="lcTimerInner"></div>
    </div>
  );
};

export default EventTimer;
