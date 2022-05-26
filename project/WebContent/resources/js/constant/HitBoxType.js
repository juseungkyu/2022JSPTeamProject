class HitBoxType {
    static ignoreConflicts = 0b00000000
    static nonIgnoreConflicts = 0b00000001

    static square = 0b00000000
    static circle = 0b00000010

    static nonDirectionalCollision = 0b00000000
    static directionalCollision = 0b00000100

    static nonpass = 0b00000000
    static pass = 0b00001000
}