from math import floor


def parse(str: str):
    lines = str.split("\n")
    numbers: list[list[int]] = []
    for line in lines:
        arr = []
        for char in line:
            if char == " ":
                arr.append(None)
            else:
                arr.append(int(char))
        numbers.append(arr)

    for line in numbers:
        length = len(line)
        if length < 9:
            for i in range(9 - length):
                line.append(None)

        if length > 9:
            print("eita porra")

    return numbers


# linha 4  5  6  1 pode estar errada
board = (
    parse(
        """7 5 6 9 3
     95 7
19 3 7  6
 18 7 2
4  5  6 1
  6 9 87 
6  9 8 32
  96
8 3 2 6 9"""
    )
)


def get_square_area(x: int, y: int):
    return {
        "x": floor(x / 3),
        "y": floor(y / 3)
    }


def is_square_possible(x: int, y: int, num: int):
    # vertical
    for line in board:
        if num == line[0]:
            return False

    # horizontal
    for column in board[y]:
        if num == column:
            return False

    # area
    area = get_square_area(x, y)

    for i in range(3):
        line = board[(area["y"] * 3) + i]

        for j in range(3):
            if num == line[(area["x"] * 3) + j]:
                return False

    return True


def list_square_possibilities(x: int, y: int):
    square_possibilities: list[int] = []

    for i in range(9):
        if is_square_possible(x, y, i):
            square_possibilities.append(i+1)

    return square_possibilities


def solve_sudoku():
    possibilities: list[list[int]] = []

    for y, line in enumerate(board):
        possibilities.append([])
        for x, num in enumerate(line):
            possibilities[y].append([])

            if board[y][x] != None:
                continue

            # num
            possibilities[y][x] = list_square_possibilities(x, y)
            # print(possibilities[y][x])

            if len(possibilities[y][x]) == 1:
                print("WOW")
                return  # temporário

            # tentativa e erro
            for possibility in possibilities[y][x]:
                # board[y][x] = possibility
                # solve_sudoku()
                pass


solve_sudoku()
