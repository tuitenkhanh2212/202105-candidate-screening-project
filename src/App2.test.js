import { Selector } from "testcafe";

const COMPLETE_BUTTON = Selector(`[complete-id="complete"]`);
const CLEAR_BUTTON = Selector("#clearButton")

fixture`todolist test`.page`http://localhost:3000/`;
test("should be able to delete task", async (t) => {
    await t.setTestSpeed(0.3)
    await t
        .click(COMPLETE_BUTTON)
    await t
        .click(CLEAR_BUTTON);
});