import { getLocalTourByParam, tours } from "../data/tours";

export async function getTours() {
  return tours;
}

export async function getTour(param) {
  const tour = getLocalTourByParam(param);

  if (!tour) {
    throw new Error("Tour not found.");
  }

  return tour;
}
