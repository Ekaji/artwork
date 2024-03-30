"use server";

export async function fetchArtDetailById(id: number) {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );

  const { data }= await response.json();

  return data;
}
