/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointer2 = headB;

    while( pointerA !== pointer2 ){

        if(pointerA === null){
            pointerA= headB;

        }else{
            pointerA = pointerA.next;
            
        }
        if(pointer2 === null){
            pointer2= headA;

        }else{
            pointer2 = pointer2.next;

        }

    }
    return pointerA;
};