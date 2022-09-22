import React, { useEffect, useState } from "react";
import { mainDataL as mainData, dataRight } from "./mainData";
import "../../sass/tienich/_tragop.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
// data
import { tgCompany } from "./subMockData";
// company
const Company = React.lazy(() => import("./subComponent/Company"));
// Thử build bằng data
const TraGop = () => {
  const [raw, setRaw] = useState(mainData);
  const [right, setRight] = useState(dataRight);

  // mainData (Left)
  useEffect(() => {
    setRaw(mainData);
  }, [raw]);
  // rightData (right)
  useEffect(() => {
    setRight(dataRight);
  }, [right]);
  return (
    <div className="sc__TdWrap grid wide">
      <div className="row scTd__row">
        {/* Col 1 - Left col */}
        <div className="scTd__col leftCol col l-7 m-6 c-12">
          <div className="leftCol__row">
            {/* Row 1 - Title */}
            {<h1 className={raw.title.className}>{raw.title.content}</h1>}
          </div>
          <div className="leftCol__row">
            {/* Row 2 - Service */}
            <ul className="sc__services">
              {raw.service.map((v, i) => {
                console.log(v);
                return (
                  <li key={i} className="sc__service">
                    {/* --------------------------------- */}
                    {/* Step */}
                    {/* --------------------------------- */}

                    <div className="sc__step row">
                      {/* Num */}
                      <div className="step__num ">{i + 1}</div>
                      {/* Title */}
                      <div className={v.step.className}>{v.step.content}</div>
                    </div>
                    {/* --------------------------------- */}
                    {/* Content (Company, Form, mar) */}
                    {/* --------------------------------- */}

                    {/* COMPANY */}
                    {v.company ? <Company companies={tgCompany} /> : null}

                    {/* FORM */}
                    {v.form ? (
                      <form
                        method={v.form.method}
                        action={v.form.action}
                        className={v.form.className}
                      >
                        {v.form.content.map((com, index) => {
                          return com.className.includes("sc__input") ? (
                            <input
                              type="text"
                              name={com.name}
                              key={index}
                              className={com.className}
                              placeholder={com.content}
                            />
                          ) : (
                            <button type="submit" className={com.className}>
                              {com.content}
                            </button>
                          );
                        })}
                      </form>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Col 2 - Right col */}
        <div className="scTd__col rightCol col l-5 m-6 c-12">
          <div className="rightCol__row">
            {/* First look */}
            {/* Row 1 - Title */}
            {<h1 className={right.title.className}>{right.title.content}</h1>}
            {/* Row 2 - img Form*/}
            <LazyLoadImage src={right.title.path} />
            {/* Content */}
            {/* Row 3 - Next title */}
            {
              <h1 className={right.content.title.className}>
                {right.content.title.content}
              </h1>
            }
            {/* Row 4 - List String Form */}
            <ul className={right.content.supports.className}>
              {right.content.supports.support.map((v, i) => {
                return (
                  <li key={i} className={v.className}>
                    {/* Step 1 */}
                    {/* Img */}
                    <LazyLoadImage className="col" src={v.path} />
                    {/* Title */}
                    <div className="col">
                      <h1 className={v.step.className}>{v.step.content}</h1>
                      {/* UnderLine */}
                      {v.underLine ? (
                        <span className="underLine">{v.underLine}</span>
                      ) : null}
                      {/* Content */}
                      <p>{v.content}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraGop;
