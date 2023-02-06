import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/home/eventlist.css";
import { veData } from "./mockData";
import eventController from "../../features/event/function";
import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
import { ErrorResponse } from "../../utils/ErrorResponse";
import { LinearProgress, Paper, Stack, Skeleton } from "@mui/material";
//
//
// Slider item
const PSlider = React.lazy(() => import("./subComponent/PSlider"));
const ListAllButton = React.lazy(() =>
  import("./subComponent/ListAllButton.js")
);
const EventTimer = React.lazy(() => import("./subComponent/EventTimer"));
const EventList = () => {
  // Api state
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //
  const [resultData, setResultData] = useState([]);
  // Fetch event
  useEffect(() => {
    eventController
      .getEvents()
      .then((res) => {
        setIsLoading(res.isLoading);
        res.isSuccess && setResultData(res?.data?.events);
        if (res.isError) {
          setIsError(true);
          throw new ErrorResponse(res?.error?.error, 500);
        }
      })
      .catch((e) => {
        toast.error(`Không thể tải sự kiện, thử lại. ${e.message}`, {
          ...toastObject,
          toastId: 99,
        });
      });
  }, []);

  // slider config
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
  };

  const body =
    resultData.length > 0 ? (
      resultData?.map((event, index) => (
        <div
          key={index}
          style={{ backgroundColor: event?.color }}
          className="lcWrap grid wide"
        >
          {/* Banner */}
          <div className="lcBanner">
            <LazyLoadImage
              style={{ maxHeight: "95px" }}
              src={event?.banner?.url}
              alt={event?.name}
            />
          </div>
          {/* Timer */}
          <EventTimer data={event} />

          {/* Slider */}
          <div className="lcSlider">
            <PSlider
              award={event?.award}
              settings={settings}
              event={event?.products}
            />
          </div>
          {/* Bt */}
          <div className="lcBt row">
            <ListAllButton />
          </div>
        </div>
      ))
    ) : (
      <Stack>No events</Stack>
    );
  const ItemSkeleton = () => {
    return (
      <Skeleton
        sx={{ borderRadius: "4px" }}
        variant="rectangle"
        width="25%"
        height="38rem"
      ></Skeleton>
    );
  };
  const SkeletonEvents = () => {
    return (
      <Paper sx={{ maxWidth: "1200px", margin: "1.6rem auto 0" }}>
        {!isError && <LinearProgress />}
        <Stack>
          {/* Banner */}
          <Skeleton
            variant="rectangle"
            width="100%"
            height="95px"
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              lineHeight: "95px",
              backgroundColor: "#c7c2c2",
            }}
          >
            {`${
              isError
                ? "Không thể tải sự kiện, kiểm tra kết nối mạng"
                : "Đang tải danh sách sự kiện hiện tại"
            }`}
          </Skeleton>
          {/* Item */}
          <Stack
            sx={{
              width: "100%",
              p: " 0 1rem",
              minHeight: "512px",
              backgroundColor: "#b3adad",
            }}
          >
            {/* Card */}
            <Skeleton
              variant="text"
              width="30rem"
              height="4rem"
              sx={{ justifySelf: "center", alignSelf: "center" }}
            />
            <Stack
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <ItemSkeleton />
              <ItemSkeleton />
              <ItemSkeleton />
              <ItemSkeleton />
              <ItemSkeleton />
            </Stack>
            {/* Button */}
            <Stack sx={{ mt: "2.4rem", mb: "1.2rem" }}>
              <ListAllButton />
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    );
  };
  return isLoading || isError ? <SkeletonEvents /> : body;
};

export default EventList;
