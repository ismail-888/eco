import React from "react";
import { Box, Rating, LinearProgress, Typography } from "@mui/material";

const ReviewComponent = () => {
  // Static Data
  const averageRating = 4.7;
  const ratingBreakdown = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 60 },
    { stars: 3, percentage: 45 },
    { stars: 2, percentage: 20 },
    { stars: 1, percentage: 10 },
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f5f5f5"
      borderRadius="10px"
      px={4}
      py={6}
      mx="auto"
      sx={{
        width: "90%",
        maxWidth: "1200px",
        flexDirection: { xs: "row", md: "row" },
        gap: { xs: 2.5, md: 4 },
      }}
    >
      {/* Left Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={{ xs: "30%", md: "30%" }}
        textAlign="center"
        // gap={1}
      >
        <Typography
          sx={{
            fontSize: { xs: "4rem", md: "4rem" },
            fontWeight: "bold",
            color: "#4c4c4c",
            lineHeight: 1,
          }}
        >
          {averageRating.toFixed(1)}
        </Typography>
        <Rating
          name="read-only"
          value={averageRating}
          precision={0.1}
          readOnly
          size="medium"
          sx={{
            color: "#4c4c4c",
            "& .MuiRating-iconFilled": { color: "#4c4c4c" },
            "& .MuiRating-iconEmpty": { color: "#d3d3d3" },
          }}
        />
      </Box>

      {/* Vertical Line */}
      <Box
        sx={{
          width: "6px",
          bgcolor: "#4c4c4c",
          height: { xs: "170px", md: "150px" },
          alignSelf: { xs: "center", md: "stretch" },
        }}
      ></Box>

      {/* Right Section */}
      <Box width={{ xs: "70%", md: "70%" }}>
        {ratingBreakdown.map((rating, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            mb={1}
            sx={{ gap: 1 }}
          >
            <Typography
              sx={{
                width: "10%",
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: "#4c4c4c",
              }}
            >
              {rating.stars}
            </Typography>
            <Box width="100%" mr={0}>
              <LinearProgress
                variant="determinate"
                value={rating.percentage}
                sx={{
                  height: 7,
                  borderRadius: 0,
                  bgcolor: "#f4f5f7",
                  "& .MuiLinearProgress-bar": { bgcolor: "#4c4c4c" },
                }}
              />
            </Box>
            <Typography
              sx={{
                width: "0%",
                // fontWeight: "bold",
                fontSize: { xs: "0.7rem", md: ".8rem" },
                color: "#4c4c4c",
              }}
            >
              %{rating.percentage}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewComponent;
