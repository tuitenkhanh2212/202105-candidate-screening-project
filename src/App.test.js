import { Selector } from "testcafe";

const TASK_INPUT = Selector("#inputTask");
const DATE_INPUT = Selector("#inputDate");
const TIME_INPUT = Selector(".react-time-picker__inputGroup");
const ADD_NEW_TASK_BUTTON = Selector("#submitButton");
const NEW_TASK = Selector(`[newtask-id="newTask"]`);

const COMPLETE_BUTTON = Selector(`[complete-id="complete"]`);
const CLEAR_BUTTON = Selector("#clearButton")

fixture`todolist test`.page`http://localhost:3000/`;

test("should be able to add new task", async (t) => {
    await t
        .selectText(TASK_INPUT)
        .typeText(TASK_INPUT, "Making Money");
    await t
        .selectText(DATE_INPUT)
        .typeText(DATE_INPUT, "22/12/2030")
        .pressKey("enter");
    await t
        .click(TIME_INPUT)
        .typeText(TIME_INPUT, "0630");
    await t.click(ADD_NEW_TASK_BUTTON);
    await t.expect(NEW_TASK.withText("Making Money").exists).ok();
});
test("should be able to delete completed task", async (t) => {
    await t
        .click(COMPLETE_BUTTON)
    await t
        .click(CLEAR_BUTTON);
    await t.expect(NEW_TASK.withText("Learn Japanese Language").exists).notOk();
});
