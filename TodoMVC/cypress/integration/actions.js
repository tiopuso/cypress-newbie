/// <reference types="cypress" />

import {TodoPage} from '../page-objects/todo page'

describe('actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()
    todoPage.validatePageTitle(0,'TodoMVC')
    todoPage.addTodo('#1 Buy Rice')
  })

  it('should add a new todo to the list', () => {
    todoPage.validateTodoText(0, '#1 Buy Rice')
    todoPage.validateToggleState(0, false)
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      todoPage.toggleTodo(0)
      todoPage.validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      todoPage.toggleTodo(0)
      todoPage.clearCompleted()
      todoPage.validateNumberOfTodosShown(0)
    })
  })
})