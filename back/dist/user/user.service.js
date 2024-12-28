"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        try {
            const { name, surname, email, password } = createUserDto;
            const hashed = await bcrypt.hash(password, 5);
            const user = await this.prisma.user.create({ data: { name, surname, email, password: hashed } });
            if (!user) {
                throw new common_1.BadRequestException('Не удалось зарегистрироваться');
            }
            return common_1.HttpStatus.CREATED;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async login(loginUserDto) {
        try {
            const { email, password } = loginUserDto;
            const finded = await this.prisma.user.findUnique({ where: { email } });
            if (!finded) {
                throw new common_1.BadRequestException('Пользователь не найден');
            }
            const findedByPass = await bcrypt.compare(password, finded.password);
            if (!findedByPass) {
                throw new common_1.BadRequestException('Пользователь не найден');
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map