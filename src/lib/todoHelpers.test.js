import { addTodo } from './toooHelpers';

test('addTodo should add the passed todo to the list', () => {
  // Arrange
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  // Act
  const result = addTodo(startTodos, newTodo);
  
  // Assert
  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};
  const result = addTodo(startTodos, newTodo);
  expect(result).not.toBe(startTodos);
});