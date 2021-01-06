"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalUsers = void 0;
const common_error_1 = require("../../common/common.error");
const users_user_1 = require("../models/users.user");
class LocalUsers {
    constructor() {
        this.users = [
            new users_user_1.User(1, "Chris", "Booth"),
            new users_user_1.User(2, "Dan", "Ransom"),
            new users_user_1.User(3, "Dom", "Sutherland"),
            new users_user_1.User(4, "Emma", "Oitaven")
        ];
    }
    /**
     * list
     */
    list(order = "") {
        return this.users.sort((a, b) => order == "desc" ? b.Id - a.Id : a.Id - b.Id);
    }
    /**
     * item
     */
    item(id) {
        const user = this.users.find(item => item.Id == id);
        if (user)
            return user;
        throw new common_error_1.Error(`User not found ${id}`);
    }
    /**
     * update
     */
    update(item) {
        const user = this.users.find(user => user.Id == item.Id);
        if (user) {
            this.users[this.users.indexOf(user)] = item;
        }
    }
    /**
     * delete
     */
    delete(item) {
        let users = [];
        this.users.forEach(user => {
            if (user.Id != item.Id) {
                users.push(user);
            }
        });
        this.users = users;
    }
    /**
     * create
     */
    create(item) {
        this.users.push(item);
    }
}
exports.LocalUsers = LocalUsers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubG9jYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9yZXBvc2l0b3J5L3VzZXJzLmxvY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDREQUFrRDtBQUNsRCxxREFBNEM7QUFHNUMsTUFBYSxVQUFVO0lBRW5CO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksaUJBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUM3QixJQUFJLGlCQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDNUIsSUFBSSxpQkFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDO1lBQ2hDLElBQUksaUJBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztTQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ksSUFBSSxDQUFDLFFBQWdCLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksSUFBSSxDQUFDLEVBQVU7UUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSTtZQUNKLE9BQU8sSUFBSSxDQUFDO1FBRWhCLE1BQU0sSUFBSSxvQkFBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxJQUFVO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLElBQVU7UUFDcEIsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsSUFBVTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUExREQsZ0NBMERDIn0=