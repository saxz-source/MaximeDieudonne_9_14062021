import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"


describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then it should render the page", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      expect(screen.getByText("Envoyer une note de frais")).toBeTruthy();
    })
  })
})