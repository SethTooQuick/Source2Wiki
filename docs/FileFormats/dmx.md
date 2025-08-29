# DMX

Datamodel is a strongly-typed generic data structure, Datamodel Exchange (MDX) is a Datamodel container file format with multiple possible encodings; binary and ASCII ("keyvalues2") are included.

## Header

DMX files always begin with a header in this format:

`<!-- dmx encoding [encoding name] [encoding version] format [format name] [format version] -->`

## Encodings

### KeyValues2

KeyValues2 is a ASCII encoding similar to JSON.

### Binary

A `string` is a C-like null-terminated string.

```cpp
struct DMX {
    string header = "<!-- dmx encoding binary %i format %s %i -->\n";

    // for version 9+ only, is often 0
    int prefixElementCount;
    Element prefixElements[prefixElementCount];

    int stringCount;
    // this contains all strings needed for the file.
    //
    string stringTable[];

    int elementCount;
    Element elements[elementCount];
    Attribute attributes[elementCount];
}

struct Element {
    // index into the string array if version > 1
    // else this is a null-terminated string
    int type;
    // index into the string array if version > 3
    // else this is a null-terminated string
    int name;
    // the UUID of the element
    char id[16];
}

struct Attribute {
    // index into the string array if version > 1
    // else this is a null-terminated string
    int name;
    // attribute type, see the enum below.
    char type;
}

enum AttributeType {
    // 32-bit integer, element index
    Element = 1,
    // 32-bit signed integer
    Integer = 2,
    // 32-bit float
    Float = 3,
    // 8-bit boolean
    Bool = 4,
    // string index into the string table
    String = 5,
    // 32-bit length, followed by the data
    ByteArray = 6,
    // stored as an int, but represents a float
    // converted to float with (this * 1000)
    TimeSpan = 7,
    // RGBA8 color
    Color = 8,
    // 32-bit floating point vector
    Vector2 = 9,
    // 32-bit floating point vector
    Vector3 = 10,
    // like Vector3, but has pitch, yaw and roll instead of x, y and z
    QAngle = 11,
    // 32-bit floating point vector
    Vector4 = 12,
    // 32-bit floating point quaternion
    Quaternion = 13,
    // 32-bit floating point 4x4 column major matrix
    Matrix = 14,
    // single byte
    Byte = 15,
    // 64-bit unsigned integer
    UnsignedLong = 16,

    // from 33 to 48 are array versions of these types.
    // they are encoded the same as the byte array,
    // with a 32-bit integer size, followed byte the data.
}
```
