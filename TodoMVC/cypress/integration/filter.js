/// <reference types="cypress" />

import {TodoPage} from '../page-objects/todo page'

describe('filter', function() {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()
    todoPage.validatePageTitle('Todos')
    todoPage.addTodo('#1 Buy Rice')
    todoPage.addTodo('#2 Cook Rice')
    todoPage.addTodo('#3 Eat Rice')
    todoPage.addTodo('#2 Cook Rice')
    todoPage.toggleTodo(1)
  })

  it('should filter "Active" correctly', () => {
    todoPage.showOnlyActiveTodos()
    todoPage.validateNumberOfTodosShown(2)
  })

  it('should filter "Completed" correctly', () => {
    todoPage.showOnlyCompletedTodos()
    todoPage.validateNumberOfTodosShown(1)
  })

  it('should filter "All" correctly', () => {
    todoPage.showAllTodos()
    todoPage.validateNumberOfTodosShown(3)
  })
})