import { DataProvider, BaseRecord, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "@/types";
import { API_URL } from "./constants";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "An introduction to programming, algorithms, and computational thinking.",
    createdAt: new Date("2026-01-12T00:00:00.000Z"),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description: "A study of vectors, matrices, and linear transformations.",
    createdAt: new Date("2026-01-12T00:00:00.000Z"),
  },
  {
    id: 3,
    code: "ENG105",
    name: "Academic Writing",
    department: "English",
    description: "Develops clear, structured writing and research skills for university study.",
    createdAt: new Date("2026-01-12T00:00:00.000Z"),
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}: GetListParams): Promise<GetListResponse<TData>> => {
    if(resource !== 'subjects'){
      return {data: [], total: 0};
    }
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    }
  },

  getApiUrl: () => API_URL,
  getOne: async() => {throw new Error('This function is not present in mock')},
  create: async() => {throw new Error('This function is not present in mock')},
  update: async() => {throw new Error('This function is not present in mock')},
  deleteOne: async() => {throw new Error('This function is not present in mock')}
}