#!/usr/bin/env python3

import math
import sys


class Container:
    """
    Simplifies a bit the Container management, orienting the axis and easy
    volume access.

    Potentially the attributes could be readonly
    """

    def __init__(self, size) -> None:
        size.sort()
        x, y, z = size
        self.x = x
        self.y = y
        self.z = z

    @property
    def volume(self):
        return self.x * self.y * self.z


def test_length(length, cubes):
    """
    Test the capability to fit a combination of available cubes to a given axis

    :param length: Number, length of the axis to compare to
    :param cubes: Number[], list of available cubes
    :return [ indexof cubes, quantity of cubes ] | False,
      Return the quantity of the biggest available cubes that fit
      or False on fail to fit
    """
    result = False
    temp_cubes = cubes[:]  # Avoid mutating original
    temp_length = length
    for cube in range(len(temp_cubes) - 1, -1, -1):
        cube_side = math.pow(2, cube)
        can_fit = math.floor(temp_length / cube_side)
        to_remove = min(can_fit, temp_cubes[cube])
        if to_remove == 0:
            continue

        # Don't override result on second passes
        if not result:
            result = [cube, to_remove]

        temp_cubes[cube] -= to_remove
        temp_length = temp_length - (to_remove * cube_side)
        if temp_length == 0:
            return result

    return False


def calculate_cubes(container, cubes):
    """
    Solves the challenge

    :param container: Container,
    :param cubes: Number[], list of available cubes
    :return Number | False
    """
    result = False

    # Retrieve cubes tested agains shortest container axis
    to_take = test_length(container.x, cubes)
    if not to_take:
        return False

    cubes[to_take[0]] -= to_take[1]
    result += to_take[1]

    # Split remaining volume into 3 containers and solve for each
    gap_side = math.pow(2, to_take[0])
    new_containers = [
        Container([container.x - (gap_side * to_take[1]), gap_side, gap_side]),
        Container([container.x, container.y - gap_side, container.z]),
        Container([container.x, gap_side, container.z - gap_side])
    ]

    for cont in new_containers:
        if cont.volume > 0:
            removing = calculate_cubes(cont, cubes)
            if not removing:
                return False
            result += removing

    return result


def solve(problem):
    """
    Prepare problem's context and solve

    :param problem: Number[], sanitized data to prepare problem
    :return calculate_cubes' return
    """
    container = Container(problem[0:3])
    cubes = problem[3:]
    return calculate_cubes(container, cubes)


def main():
    answers = [
        [10, 10, 10, 2000],  # 1000
        [10, 10, 10, 900],  # -1
        [4, 4, 8, 10, 10, 1],  # 9
        [5, 5, 5, 61, 7, 1],  # 62
        [5, 5, 6, 61, 4, 1],  # 59
        [1000, 1000, 1000, 0, 0, 0, 46501, 0, 2791, 631, 127, 19, 1],  # 50070
        [1, 1, 9, 9, 1],  # 9
    ]

    # Read and sanitize input
    problems = [[int(i) for i in p.strip().split(' ')]
                for p in sys.stdin.readlines()]

    # for problem in answers:
    for problem in problems:
        solution = solve(problem)
        if not solution:
            print(-1)
        else:
            print(solution)


if __name__ == "__main__":
    main()
