import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RegisterPage from "./page";
import "@testing-library/jest-dom";
import { useFormState, useFormStatus } from "react-dom";

// Mock the useFormState and useFormStatus hooks
vi.mock("react-dom", async () => {
   // const actual = await vi.importActual("react-dom");
   return {
      // ...actual,
      useFormState: vi.fn(() => [
         { success: false, message: null, errors: null },
         vi.fn(),
      ]),
      useFormStatus: vi.fn(() => ({
         pending: false,
         data: null,
         method: null,
         action: null,
      })),
   };
});

describe("RegisterUserForm", () => {
   it("renders the form correctly", () => {
      render(<RegisterPage />);

      expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Número")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Repita a senha")).toBeInTheDocument();
      expect(screen.getByText("Aceito os termos de uso")).toBeInTheDocument();
      expect(
         screen.getByRole("button", { name: "Continuar" }),
      ).toBeInTheDocument();
   });

   it("displays error messages when form is submitted with errors", async () => {
      vi.mocked(useFormState).mockReturnValue([
         {
            success: false,
            message: null,
            errors: {
               name: ["Nome é obrigatório"],
               email: ["Email inválido"],
            },
         },
         vi.fn(),
         false,
      ]);

      render(<RegisterPage />);

      fireEvent.click(screen.getByRole("button", { name: "Continuar" }));

      expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("Email inválido")).toBeInTheDocument();
   });

   it("shows loading state when form is submitting", () => {
      vi.mocked(useFormStatus).mockReturnValue({
         pending: true,
         data: new FormData(),
         method: "post",
         action: vi.fn(),
      });

      render(<RegisterPage />);
      expect(screen.getByText("Enviando...")).toBeInTheDocument();
      expect(
         screen.queryByRole("button", { name: "Continuar" }),
      ).not.toBeInTheDocument();
   });
});
