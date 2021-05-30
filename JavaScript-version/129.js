var list = [4,9,0,5,1];

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function create(node, array, i){
    node = new TreeNode(array[i]);
    if (array[i+1] != null){
        node.left = array[i+1];
    }
    node.right = array[i+2];
    if(node.left != null);
}



function deepTree(root, prevSum){
    if (root == null) {
        return 0;
    }
    // 
    const sum = prevSum * 10 + root.val;
    if (root.left == null && root.right == null) {
        return sum;
    } else {
        return deepTree(root.left, sum) + deepTree(root.right, sum);
    }
}

var sumNumbers = function(root) {
    return deepTree(root, 0);
};