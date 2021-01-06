"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Users = void 0;
const common_error_1 = require("../common/common.error");
class Users {
    constructor() {
        this.users = [
            new User(1, "Chris", "Booth"),
            new User(2, "Dan", "Ransom"),
            new User(3, "Dom", "Sutherland"),
            new User(4, "Emma", "Oitaven")
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
exports.Users = Users;
class User {
    constructor(id, firstName, lastName) {
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubG9jYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91c2Vycy91c2Vycy5sb2NhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBK0M7QUFFL0MsTUFBYSxLQUFLO0lBRWQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7U0FDakMsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUksQ0FBQyxRQUFnQixFQUFFO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUksQ0FBQyxFQUFVO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUk7WUFDSixPQUFPLElBQUksQ0FBQztRQUVoQixNQUFNLElBQUksb0JBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsSUFBVTtRQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMvQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxJQUFVO1FBQ3BCLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLElBQVU7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBMURELHNCQTBEQztBQUVELE1BQWEsSUFBSTtJQUtiLFlBQVksRUFBVSxFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDdkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFWRCxvQkFVQyJ9