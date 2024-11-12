{
    //

    const bros1: string[] = [
        'mahmudul',
        'hasan',
        'tuhin'
    ];

    const bros2: string[] = ['hasib', 'tuhin', 'parvej']
    bros1.push(...bros2)

    const mentors1 = {
        name1: 'tuhin',
        name2: 'mahmudul',
        name3: 'hasan',
    }

    const mentors2 = {
        friendName: 'parvej',
        friendName2: 'hasib',
        friendName3: 'tuhin',
        friendName4: 'hasan',
        friendName5: 'akash'
    }
    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    console.log(mentorList);

    const array1: number[] = [1, 2, 3, 4]
    const array2: number[] = [1, 2, 57]

    array1.push(...array2)
    const arrayList = {
        ...array1,
        ...array2
    }
    console.log(arrayList);


    // learn rest operator

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: String) => console.log(` ${friend}`))
    }

    greetFriends('hasib', 'parvej', 'tuhin', 'hasan', 'tawsif')


    const countNumber = (...Countnumber: number[]) => {
        Countnumber.forEach((count: number) => console.log(` ${count}`))
    }

    countNumber(1, 2, 7, 4, 5)

    const myBestFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`${friend}`))
    }

    myBestFriends('tuhin', 'hasn', 'mahmudul', 'parvej', 'hasib')


    const mySchoolFriend = (...schoolFriends: string[]) => {
        schoolFriends.forEach((friend: string) => console.log(`${friend}`));
    }

    myBestFriends('mahmud', 'hasan', 'tuhin', 'parvej', 'hasib', 'emam')


    //
}