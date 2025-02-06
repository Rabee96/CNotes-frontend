import useSWR from "swr";
import { useMemo } from "react";

// utils
import axiosInstance, { fetcher, endpoints } from "../utils/axios";
// types
import { INote } from "./types";

// ----------------------------------------------------------------------

// Function to fetch notes without using hooks
export const fetchNotes = async () => {
  // Adjust based on your API response structure
};

// ----------------------------------------------------------------------

export async function useGetNotes() {
  const URL = endpoints.note.list;
  const response = await axiosInstance.get(URL);
  return response.data;
}

// ----------------------------------------------------------------------

export async function useCreateNote(newNote: INote) {
  const URL = endpoints.note.create;
  try {
    const response = await axiosInstance.post(URL, newNote);
    console.log("response = >", response);
    return response.data as INote;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error("Create note endpoint not found");
    }
    if (error.response?.status === 403) {
      throw new Error("CORS error: Not allowed to access this resource");
    }
    if (error.message === "Unauthenticated.") {
      return { success: false, message: "Unauthenticated" };
    }
    throw new Error(error || "Failed to create note");
  }
}

// ----------------------------------------------------------------------

export async function useDeleteNote(id: string) {
  const URL = endpoints.note.delete(id);

  try {
    await axiosInstance.delete(URL);
    return { deleted: true };
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error("Delete note endpoint not found");
    }
    if (error.response?.status === 403) {
      throw new Error("CORS error: Not allowed to access this resource");
    }
    if (error.message === "Unauthenticated.") {
      return { success: false, message: "Unauthenticated" };
    }
    throw new Error(error || "Failed to delete note");
  }
}
