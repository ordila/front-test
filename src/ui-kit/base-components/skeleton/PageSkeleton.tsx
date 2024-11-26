import React from "react";
import { Skeleton, Box, Grid } from "@mui/material";

const PageSkeleton = () => {
  return (
    <div className="space-y-10">
      {/* Верхній блок (суцільна площина) */}
      <Box className="w-full h-[600px] bg-gray-100 rounded-lg animate-pulse">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={600}
          sx={{ mt: 2 }}
        />
      </Box>

      {/* Нижній блок (карточки продуктів) */}
      <Grid container spacing={2}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className="relative bg-gray-100 rounded-lg p-4">
              {/* Знижка */}

              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ mt: 2 }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PageSkeleton;
