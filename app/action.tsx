"use server";

const LIMIT = 18;

export async function fetchArtDetails(page: number) {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?limit=${LIMIT}&page=${page}`
  );

  const data  = await response.json();

  return data;
}
