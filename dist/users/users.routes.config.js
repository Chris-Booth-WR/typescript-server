"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_local_1 = require("./repository/users.local");
const users_user_1 = require("./models/users.user");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
        this.users = new users_local_1.LocalUsers();
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get((req, res) => {
            var _a, _b;
            res.status(200).json(this.users.list((_b = (_a = req.query["order"]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "asc"));
        })
            .post((req, res) => {
            const user = new users_user_1.User(req.body["id"], req.body["firstName"], req.body["lastName"]);
            res.status(200).send(this.users.create(user));
        });
        this.app.route(`/users/:userId`)
            .all((req, res, next) => {
            next();
        })
            .get((req, res) => {
            res.status(200).send(this.users.item(Number.parseInt(req.params.userId)));
        })
            .put((req, res) => {
            const user = new users_user_1.User(req.body["id"], req.body["firstName"], req.body["lastName"]);
            res.status(200).send(this.users.update(user));
        })
            .delete((req, res) => {
            const user = new users_user_1.User(req.body["id"], req.body["firstName"], req.body["lastName"]);
            res.status(200).send(this.users.delete(user));
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQW9FO0FBRXBFLDBEQUFzRDtBQUN0RCxvREFBMkM7QUFHM0MsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBRS9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25CLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFOztZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksYUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxRQUFRLHFDQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQzNCLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFFLEVBQUU7WUFDN0UsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2pELE1BQU0sSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25GLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFuQ0Qsa0NBbUNDIn0=