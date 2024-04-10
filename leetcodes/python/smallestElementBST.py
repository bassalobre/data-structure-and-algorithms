def kthSmallest(root, k):
        visited = []

        def getNodeValues(node):
            if not node: return

            visited.append(node.val)

            getNodeValues(node.left)
            getNodeValues(node.right)

        getNodeValues(root)

        visited.sort()

        return visited[k - 1]