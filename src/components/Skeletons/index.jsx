import { Container, Skeleton } from "@mui/material";
import * as React from 'react';

export const Skeletons = () => {
    return (
        <Container maxWidth="xxl">
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }}/>
        </Container>
    )
}